import { request } from '@octokit/request';

const result = await request('GET /repos/{owner}/{repo}', {
  owner: 'awsomesawce',
  repo: 'scripts-pwsh',
});

console.log(result);
