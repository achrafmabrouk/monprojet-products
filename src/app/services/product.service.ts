import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): Product[] {
    return  [
      { code: 'P100', libelle: 'Cafe', prixUnitaire: 500.5 },
      { code: 'P200', libelle: 'Thé', prixUnitaire: 500.5 },
      { code: 'P300', libelle: 'Jus d\'orange', prixUnitaire: 500.5 },
      { code: 'P400', libelle: 'Coca Cola', prixUnitaire: 500.5 },
      { code: 'P500', libelle: 'Eau gazifiee', prixUnitaire: 500.5 }
    ];
  }
}
