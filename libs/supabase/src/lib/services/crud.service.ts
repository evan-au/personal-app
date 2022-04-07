// import { Injectable } from '@angular/core';
// import { supabaseEnvironment } from '../../supabase-environments/supabase-environment';

// // BAAS - Supabase
// import {
//   createClient,
//   PostgrestError,
//   SupabaseClient,
// } from '@supabase/supabase-js';

// @Injectable({
//   providedIn: 'root',
// })
// export class CrudService {
//   public supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient(
//       supabaseEnvironment.crudUrl,
//       supabaseEnvironment.crudKey
//     );
//   }

//   //CREATE
//   async create(payload: unknown) {
//     const { data, error } = await this.supabase
//       .from('<TABLE-NAME>')
//       .upsert([{ payload }]);

//     return {
//       data,
//       error: error as PostgrestError,
//     };
//   }

//   // READ
//   async read() {
//     const { data, error } = await this.supabase
//       .from('<TABLE-NAME>')
//       .select('*');

//     return {
//       data,
//       error: error as PostgrestError,
//     };
//   }

//   // UPDATE
//   async update(payload: unknown) {
//     const { data, error } = await this.supabase
//       .from('<TABLE-NAME>')
//       .update({ payload })
//       .match({ id: payload });

//     return {
//       data,
//       error: error as PostgrestError,
//     };
//   }

//   // DELETE
//   async delete(payload: unknown) {
//     const { data, error } = await this.supabase
//       .from('<TABLE-NAME>')
//       .delete({ returning: 'minimal' })
//       .match({ id: payload });

//     return {
//       data,
//       error: error as PostgrestError,
//     };
//   }
// }
