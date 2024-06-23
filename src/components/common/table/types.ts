import { Status } from "@/models/Status";
import { ColumnDef } from "@tanstack/react-table";

type CanAdd = {
  canAdd: true;
  onAdd: () => void;
}

type CannotAdd = {
  canAdd?: false;
}

type CanRefresh = {
  canRefresh: true;
  onRefresh: () => void;
  isRefreshing: boolean;
}

type CannotRefresh = {
  canRefresh?: false;
}

type AddOptions = CanAdd | CannotAdd;
type RefreshOptions = CanRefresh | CannotRefresh;

export type DataTableProps<TData, TValue> =  
AddOptions & RefreshOptions &
{
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  state: Status;
  canSearch?: boolean;
}