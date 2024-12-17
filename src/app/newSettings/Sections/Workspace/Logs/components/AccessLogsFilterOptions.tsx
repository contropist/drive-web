import { Menu, Transition } from '@headlessui/react';
import { Button, Checkbox, RadioButton } from '@internxt/internxtui';
import { WorkspaceLogType } from '@internxt/sdk/dist/workspaces';
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr';
import Input from 'app/shared/components/Input';

interface FilterOptionsProps {
  searchMembersInputValue: string;
  workspaceLogTypes?: WorkspaceLogType[];
  selectedFilters: {
    activity: WorkspaceLogType[];
    days?: number;
  };
  onClearAllFilters: () => void;
  translate: (key: string, props?: Record<string, unknown>) => string;
  onChangeActivityFilters: (activityType: WorkspaceLogType) => void;
  handleDaysFilter: (days: number) => void;
  onSearchMembersInputValueChange: (value: string) => void;
}

const ALLOWED_LAST_DAYS_FILTERS = [7, 30, 90];

const FilterActivatedIndicator = () => <div className="flex h-2 w-2 rounded-full bg-primary" />;

export const AccessLogsFilterOptions = ({
  selectedFilters,
  searchMembersInputValue,
  workspaceLogTypes,
  translate,
  handleDaysFilter,
  onClearAllFilters,
  onChangeActivityFilters,
  onSearchMembersInputValueChange,
}: FilterOptionsProps): JSX.Element => {
  const isFilteredByActivity = selectedFilters.activity.length > 0;
  const isFilteredByDays = selectedFilters.days;
  const thereAreAnyFilterActivated = isFilteredByActivity || isFilteredByDays;

  return (
    <div className="flex flex-row justify-between">
      <Input
        placeholder={translate('preferences.workspace.members.search')}
        variant="email"
        autoComplete="off"
        onChange={onSearchMembersInputValueChange}
        value={searchMembersInputValue}
        name="memberName"
      />
      <Menu as="div" className="relative z-20 outline-none">
        <Menu.Button>
          <Button variant="secondary" className="flex aspect-square flex-row gap-2">
            <p className="text-gray-80">{translate('preferences.workspace.accessLogs.filterActions.title')}</p>
            <div className="relative flex">
              <FunnelSimple size={24} className="text-gray-100" />
              {thereAreAnyFilterActivated && (
                <div className="absolute right-0 top-0.5 z-10 rounded-full border-2 border-white dark:border-gray-5">
                  <FilterActivatedIndicator />
                </div>
              )}
            </div>
          </Button>
        </Menu.Button>

        <Transition
          className={'fixed right-6 z-20 pt-1'}
          enter={'origin-top-right transition duration-100 ease-out'}
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave={'origin-top-right transition duration-100 ease-out'}
          leaveFrom="scale-95 opacity-100"
          leaveTo="scale-100 opacity-0"
        >
          <Menu.Items
            className={
              'absolute right-0 z-20 mt-0 flex min-w-[256px] flex-col rounded-lg border border-gray-10 bg-surface py-1.5 shadow-subtle-hard dark:bg-gray-5'
            }
          >
            <div className="flex w-full flex-col gap-3 rounded-lg">
              <div className="flex w-full flex-row items-center justify-between px-5 pt-1">
                <p className="text-lg font-medium text-gray-100">
                  {translate('preferences.workspace.accessLogs.filterActions.filters')}
                </p>
                <Button
                  variant="ghost"
                  className="border border-gray-10"
                  disabled={!thereAreAnyFilterActivated}
                  onClick={onClearAllFilters}
                >
                  {translate('preferences.workspace.accessLogs.filterActions.clear')}
                </Button>
              </div>
              <div className="w-full border border-gray-10" />
              <div className="flex flex-col gap-6 px-5 pt-1">
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-row items-center gap-1.5">
                    <p className="text-sm font-medium text-gray-100">
                      {translate('preferences.workspace.accessLogs.filterActions.activity.title')}
                    </p>
                    {isFilteredByActivity && <FilterActivatedIndicator />}
                  </div>
                  <div className="flex flex-col gap-3">
                    {workspaceLogTypes?.map((activityFilter) => (
                      <div className="flex flex-row items-center gap-2" key={activityFilter}>
                        <Checkbox
                          checked={selectedFilters.activity.some((activity) => activity === activityFilter)}
                          onClick={() => onChangeActivityFilters(activityFilter)}
                        />
                        <p className="text-gray-100">
                          {translate(`preferences.workspace.accessLogs.filterActions.activity.${activityFilter}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-row items-center gap-1.5">
                    <p className="text-sm font-medium text-gray-100">
                      {translate('preferences.workspace.accessLogs.filterActions.dateRange.title')}
                    </p>
                    {isFilteredByDays && <FilterActivatedIndicator />}
                  </div>
                  <div className="flex flex-col gap-3">
                    {ALLOWED_LAST_DAYS_FILTERS.map((days) => (
                      <div className="flex flex-row items-center gap-2" key={days}>
                        <RadioButton checked={selectedFilters.days === days} onClick={() => handleDaysFilter(days)} />
                        <p className="text-gray-100">
                          {translate('preferences.workspace.accessLogs.filterActions.dateRange.days', {
                            days,
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
