// import { Injectable } from '@angular/core';
// import { createClient, SupabaseClient } from '@supabase/supabase-js';
// import { supabaseEnvironment } from '../../supabase-environments/supabase-environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   public supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient(
//       supabaseEnvironment.projectUrl,
//       supabaseEnvironment.projectKey
//     );
//   }

//   signIn(email: string, password: string) {
//     return this.supabase.auth.signIn({ email, password });
//   }

//   signUp(email: string, password: string) {
//     return this.supabase.auth.signUp({
//       email,
//       password,
//     });
//   }

//   signOut() {
//     return this.supabase.auth.signOut();
//   }
// }
