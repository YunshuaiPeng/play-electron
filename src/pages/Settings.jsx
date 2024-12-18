import {
  Title3,
  Card,
  Label,
  Input,
  Switch,
  Button,
} from '@fluentui/react-components';

function Settings() {
  return (
    <div className="p-6">
      <Title3 className="mb-6">Settings</Title3>
      
      <Card className="max-w-2xl">
        <form className="space-y-6">
          <div>
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Admin Dashboard" />
          </div>

          <div>
            <Label htmlFor="email">Admin Email</Label>
            <Input id="email" type="email" />
          </div>

          <div className="space-y-4">
            <Label>Preferences</Label>
            <div className="space-y-2">
              <Switch label="Email Notifications" />
              <Switch label="Dark Mode" />
              <Switch label="Two-Factor Authentication" />
            </div>
          </div>

          <div className="flex gap-3">
            <Button appearance="primary">Save Changes</Button>
            <Button appearance="subtle">Cancel</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Settings; 