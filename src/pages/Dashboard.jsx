import {
  Card,
  Title3,
  Body1,
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DataGridHeaderCell,
  DataGridCell,
  Badge,
  createTableColumn,
} from '@fluentui/react-components';

function Dashboard() {
  const items = [
    { id: 1, status: 'Active', name: 'Project A', progress: '75%' },
    { id: 2, status: 'Pending', name: 'Project B', progress: '45%' },
    { id: 3, status: 'Completed', name: 'Project C', progress: '100%' },
  ];

  // 正确定义列
  const columns = [
    createTableColumn({
      columnId: 'name',
      compare: (a, b) => a.name.localeCompare(b.name),
      renderHeaderCell: () => 'Project Name',
      renderCell: (item) => item.name,
    }),
    createTableColumn({
      columnId: 'status',
      compare: (a, b) => a.status.localeCompare(b.status),
      renderHeaderCell: () => 'Status',
      renderCell: (item) => (
        <Badge 
          appearance={
            item.status === 'Active' ? 'success' :
            item.status === 'Pending' ? 'warning' : 'informative'
          }
        >
          {item.status}
        </Badge>
      ),
    }),
    createTableColumn({
      columnId: 'progress',
      compare: (a, b) => a.progress.localeCompare(b.progress),
      renderHeaderCell: () => 'Progress',
      renderCell: (item) => item.progress,
    }),
  ];

  return (
    <div className="p-6">
      <Title3 className="mb-6">Dashboard</Title3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <Title3>Users</Title3>
          <Body1>1,234</Body1>
        </Card>
        <Card>
          <Title3>Revenue</Title3>
          <Body1>$45,678</Body1>
        </Card>
        <Card>
          <Title3>Projects</Title3>
          <Body1>56</Body1>
        </Card>
      </div>

      <Card>
        <Title3 className="mb-4">Recent Projects</Title3>
        <DataGrid
          items={items}
          columns={columns}
          sortable
          selectionMode="single"
        />
      </Card>
    </div>
  );
}

export default Dashboard; 