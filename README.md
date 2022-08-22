# auto-delete-access-keys

This AWS SAM stack sets up infrastructure to automatically delete access keys for all users on a given schedule

Example SAM deploy:
sam deploy --stack-name delete-access-keys --s3-bucket auto-delete-access-keys-sam --capabilities CAPABILITY_NAMED_IAM --parameter-overrides "SchedulerCron=cron(5 * * * * *)"

Note: The policy within "protect-system-form-users" Can be attached to an IAM group to prevent users from modifying the infrastructure 
provided by this stack.

![Diagram]

[Diagram]: https://github.com/badgerduke/auto-delete-access-keys/blob/main/DeleteAccessKeys.png
