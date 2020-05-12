import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ILoading {
  status: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading = new BehaviorSubject<ILoading>({
    status: false, // Se o load para inicar já travado ou liberado
  })

  constructor() { }

  get loadingData(): ILoading {
    return this._loading.value;
  }

  set loadingData(loadingData: ILoading) {
    this._loading.next(loadingData);
  }
}
