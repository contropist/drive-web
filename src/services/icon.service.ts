import { FunctionComponent, SVGProps } from 'react';

import { FileExtensionGroup } from '../models/file-types';

import { ReactComponent as LightFolder } from '../assets/icons/light/folder.svg';
import { ReactComponent as DefaultFile } from '../assets/icons/file-types/default.svg';
import { ReactComponent as AudioFile } from '../assets/icons/file-types/audio.svg';
import { ReactComponent as CodeFile } from '../assets/icons/file-types/code.svg';
import { ReactComponent as ImageFile } from '../assets/icons/file-types/image.svg';
import { ReactComponent as PdfFile } from '../assets/icons/file-types/pdf.svg';
import { ReactComponent as PptFile } from '../assets/icons/file-types/ppt.svg';
import { ReactComponent as TxtFile } from '../assets/icons/file-types/txt.svg';
import { ReactComponent as VideoFile } from '../assets/icons/file-types/video.svg';
import { ReactComponent as WordFile } from '../assets/icons/file-types/word.svg';
import { ReactComponent as XlsFile } from '../assets/icons/file-types/xls.svg';
import { ReactComponent as XmlFile } from '../assets/icons/file-types/xml.svg';
import { ReactComponent as ZipFile } from '../assets/icons/file-types/zip.svg';
import fileExtensionService from './file-extension.service';

const iconsByFileExtensionGroup = {
  [FileExtensionGroup.Audio]: AudioFile,
  [FileExtensionGroup.Code]: CodeFile,
  [FileExtensionGroup.Image]: ImageFile,
  [FileExtensionGroup.Pdf]: PdfFile,
  [FileExtensionGroup.Ppt]: PptFile,
  [FileExtensionGroup.Txt]: TxtFile,
  [FileExtensionGroup.Video]: VideoFile,
  [FileExtensionGroup.Word]: WordFile,
  [FileExtensionGroup.Xls]: XlsFile,
  [FileExtensionGroup.Xml]: XmlFile,
  [FileExtensionGroup.Zip]: ZipFile,
  [FileExtensionGroup.Default]: DefaultFile
};
const extensionsList = fileExtensionService.computeExtensionsLists();

export const getItemIcon = (isFolder: boolean, itemExtension: string): FunctionComponent<SVGProps<SVGSVGElement>> => {
  let groupId: FileExtensionGroup = FileExtensionGroup.Default;

  Object.entries(extensionsList).every(([key, list]) => {
    const matched = list.includes(itemExtension);

    if (matched) {
      groupId = FileExtensionGroup[key];
    }

    return !matched;
  });

  return !isFolder ?
    iconsByFileExtensionGroup[groupId] :
    LightFolder;
};

const iconService = {
  getItemIcon
};

export default iconService;