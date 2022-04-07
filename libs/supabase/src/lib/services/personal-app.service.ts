import { Injectable } from '@angular/core';
import { supabaseEnvironment } from '../../supabase-environments/supabase-environment';

// BAAS - Supabase
import {
  createClient,
  PostgrestError,
  SupabaseClient,
} from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class PersonalAppService {
  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      supabaseEnvironment.personalAppUrl,
      supabaseEnvironment.personalAppKey
    );
  }

  //CREATE
  async create<T>(payload: T) {
    const { data, error } = await this.supabase
      .from<T>('sentences')
      .upsert([{ ...payload }]);

    return {
      data: data as T | null,
      error: error as PostgrestError,
    };
  }

  // READ
  async read<T>() {
    const { data, error } = await this.supabase
      .from<T>('sentences')
      .select('*');

    return {
      data: data as T | null,
      error: error as PostgrestError,
    };
  }

  // UPDATE
  async update<T>(payload: T) {
    const { data, error } = await this.supabase
      .from<T>('sentences')
      .update({ ...payload })
      .match({ id: payload });

    return {
      data: data as T | null,
      error: error as PostgrestError,
    };
  }

  // DELETE
  async delete(payload: unknown) {
    const { data, error } = await this.supabase
      .from('<TABLE-NAME>')
      .delete({ returning: 'minimal' })
      .match({ id: payload });

    return {
      data,
      error: error as PostgrestError,
    };
  }
}
