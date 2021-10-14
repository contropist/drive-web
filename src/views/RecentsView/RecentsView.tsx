import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import DriveExplorer from '../../components/DriveExplorer/DriveExplorer';
import { AppView } from '../../models/enums';
import { DriveItemData } from '../../models/interfaces';
import navigationService from '../../services/navigation.service';
import { AppDispatch, RootState } from '../../store';
import { storageSelectors } from '../../store/slices/storage';
import storageThunks from '../../store/slices/storage/storage.thunks';

export interface RecentsViewProps {
  isLoadingRecents: boolean;
  items: DriveItemData[];
  dispatch: AppDispatch;
}

class RecentsView extends Component<RecentsViewProps> {
  componentDidMount(): void {
    this.props.dispatch(storageThunks.resetNamePathThunk());
    this.refreshRecents();
  }

  refreshRecents = () => {
    const { dispatch } = this.props;

    dispatch(storageThunks.fetchRecentsThunk());
  };

  redirectToDrive = () => {
    navigationService.push(AppView.Drive);
  };

  render(): ReactNode {
    const { items, isLoadingRecents } = this.props;

    return (
      <DriveExplorer
        title="Recents"
        titleClassName="px-3"
        isLoading={isLoadingRecents}
        items={items}
        onFolderCreated={this.redirectToDrive}
      />
    );
  }
}

export default connect((state: RootState) => {
  return {
    isLoadingRecents: state.storage.isLoadingRecents,
    items: storageSelectors.filteredItems(state)(state.storage.recents),
  };
})(RecentsView);
