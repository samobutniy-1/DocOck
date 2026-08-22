import { Component } from '@angular/core';
import { Cipher } from '../../../shared/models/ciphers.model';
import { CIPHERS } from '../ciphers.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cipher-catalog',
  imports: [RouterLink],
  templateUrl: './cipher-catalog.html',
  styleUrl: './cipher-catalog.css',
})
export class CipherCatalog {
  ciphers: Cipher[] = CIPHERS;
  grouped: Record<'easy' | 'medium' | 'hard', Cipher[]> = {
    easy: CIPHERS.filter((c) => c.level === 'easy'),
    medium: CIPHERS.filter((c) => c.level === 'medium'),
    hard: CIPHERS.filter((c) => c.level === 'hard'),
  };
}
