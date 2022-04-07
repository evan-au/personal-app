## Supabase library

BAAS Library [Supabase](https://supabase.com/)

# Setup library

- Install supabase => npm install @supabase/supabase-js
- Create project on [supabase](https://app.supabase.io/)
- Copy the project anon/public key and API URL
- Save the copied data => local supabase library => environments/environment.ts & environments/environment.prod.ts
- Copy crud.service.ts file and rename the file to the new service name
- Export renamed service => index.ts

Optional:

- Add the following object to the fileReplacements Array in angular.json/project.json/workspace.json file =>
  {
  "replace": "libs/supabase/src/supabase-environments/supabase-environment.ts",
  "with": "libs/supabase/src/supabase-environments/supabase-environment.prod.ts"
  }

## Templates

# CRUD template

The crud service provides a series of basic CRUD methods to interact with the supabase database.

# Auth template

The auth service provides a series of basic authentication methods to authentify users on the supabase auth service.
