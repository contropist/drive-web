import React from 'react';

import folderIcon from '../../assets/icons/folder.svg';

import './FileActivity.scss';

interface FileListProps { }

interface FileListState { }

class FileActivity extends React.Component<FileListProps, FileListState> {
  constructor(props: FileListProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <div className="w-activity-1280 bg-l-neutral-20 px-32px py-42px">
        <div>

          <div className="text-center">
            <img src={folderIcon} className="activity-file-icon m-auto" />
            <div>
              <span className="text-neutral-900 block font-semibold text-base">Folder info</span>
              <span className="text-neutral-500 block text-sm">Folder name: FilesPending</span>
            </div>
          </div>

          <div className="file-info-container text-left">
            <span className="block text-neutral-500 text-base">File: PDF</span>
            <span className="block text-neutral-500 text-base">Folder path: ../FilesPending</span>
            <span className="block text-neutral-500 text-base">Size: 55.7 MB</span>
            <span className="block text-neutral-500 text-base">Modified at: 24 Jun 2021</span>
            <span className="block text-neutral-500 text-base">Created at: 24 Jun 2021</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FileActivity;