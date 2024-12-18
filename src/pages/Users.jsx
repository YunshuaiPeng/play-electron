import {
  Title3,
  Card,
  DataGrid,
  Button,
  Badge,
  createTableColumn,
} from '@fluentui/react-components';
import { EditRegular, DeleteRegular } from '@fluentui/react-icons';

function Users() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ];

  const columns = [
    createTableColumn({
      columnId: 'name',
      compare: (a, b) => a.name.localeCompare(b.name),
      renderHeaderCell: () => 'Name',
      renderCell: (item) => item.name,
    }),
    createTableColumn({
      columnId: 'email',
      compare: (a, b) => a.email.localeCompare(b.email),
      renderHeaderCell: () => 'Email',
      renderCell: (item) => item.email,
    }),
    createTableColumn({
      columnId: 'role',
      compare: (a, b) => a.role.localeCompare(b.role),
      renderHeaderCell: () => 'Role',
      renderCell: (item) => item.role,
    }),
    createTableColumn({
      columnId: 'status',
      compare: (a, b) => a.status.localeCompare(b.status),
      renderHeaderCell: () => 'Status',
      renderCell: (item) => (
        <Badge appearance={item.status === 'Active' ? 'success' : 'severe'}>
          {item.status}
        </Badge>
      ),
    }),
    createTableColumn({
      columnId: 'actions',
      renderHeaderCell: () => 'Actions',
      renderCell: () => (
        <div className="flex gap-2">
          <Button icon={<EditRegular />} appearance="subtle" />
          <Button icon={<DeleteRegular />} appearance="subtle" />
        </div>
      ),
    }),
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Title3>Users</Title3>
        <Button appearance="primary">Add User</Button>
      </div>

      <Card>
        <DataGrid
          items={users}
          columns={columns}
          sortable
          selectionMode="single"
        />
      </Card>
    </div>
  );
}

export default Users; 