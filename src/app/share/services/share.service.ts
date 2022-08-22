import errorService from '../../core/services/error.service';
import { ShareTypes } from '@internxt/sdk/dist/drive';
import { SdkFactory } from '../../core/factory/sdk';

export function generateShareLink(params: ShareTypes.GenerateShareLinkPayload): Promise<string> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.createShareLink(params).then((response) => {
    return `${window.location.origin}/s/${params.type}/${response.token}/${params?.code ?? ''}`;
  });
}

export function updateShareLink(params: ShareTypes.UpdateShareLinkPayload): Promise<ShareTypes.ShareLink> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.updateShareLink(params).catch((error) => {
    throw errorService.castError(error);
  });
}

export function getSharedFileInfo(token: string): Promise<ShareTypes.ShareLink> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLink(token).catch((error) => {
    throw errorService.castError(error);
  });
}

export function getSharedFolderInfo(token: string): Promise<ShareTypes.ShareLink> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLink(token).catch((error) => {
    throw errorService.castError(error);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getSharedFolderSize(shareId: string, folderId: string): Promise<any> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLinkFolderSize({ itemId: shareId, folderId }).catch((error) => {
    throw errorService.castError(error);
  });
}
interface SharedDirectoryFoldersPayload {
  token: string;
  directoryId: number;
  offset: number;
  limit: number;
}

interface SharedDirectoryFilesPayload {
  token: string;
  directoryId: number;
  offset: number;
  limit: number;
  code: string;
}
export function getSharedDirectoryFolders(
  payload: SharedDirectoryFoldersPayload,
): Promise<ShareTypes.SharedDirectoryFolders> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLinkDirectory({
    type: 'folder',
    token: payload.token,
    folderId: payload.directoryId,
    page: payload.offset / payload.limit,
    perPage: payload.limit,
  });
}

export function getSharedDirectoryFiles(
  payload: SharedDirectoryFilesPayload,
): Promise<ShareTypes.SharedDirectoryFiles> {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLinkDirectory({
    type: 'file',
    token: payload.token,
    code: payload.code,
    folderId: payload.directoryId,
    page: payload.offset / payload.limit,
    perPage: payload.limit,
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getAllShareLinks(
  page: number,
  perPage: number,
  orderBy?: 'views:ASC' | 'views:DESC' | 'createdAt:ASC' | 'createdAt:DESC',
) {
  const shareClient = SdkFactory.getInstance().createShareClient();
  return shareClient.getShareLinks(page, perPage, orderBy).catch((error) => {
    throw errorService.castError(error);
  });
}

export function deleteShareLink(shareId: string): Promise<{ shareId: string; deleted: boolean }> {
  const shareClient = SdkFactory.getInstance().createShareClient();

  return shareClient.deleteShareLink(shareId);
}

const shareService = {
  generateShareLink,
  updateShareLink,
  getSharedFileInfo,
  getSharedDirectoryFiles,
  getSharedDirectoryFolders,
  getAllShareLinks,
  deleteShareLink,
};

export default shareService;
