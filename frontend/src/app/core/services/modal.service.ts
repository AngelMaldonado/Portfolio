import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum ModalMode {
  edit = 'Editar',
  delete = 'Eliminar',
  create = 'Agregar'
}

export type ModalState = {
  model: Object | undefined,
  mode: ModalMode,
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private state: Subject<ModalState>
  private id: string = ''

  constructor() {
    this.state = new Subject<ModalState>()
  }

  setId(id: string) {
    this.id = id
  }

  show(model?: Object, mode?: ModalMode, id?: string) {
    this.state.next({ model, mode: mode ?? ModalMode.create })
    const dialog = document.getElementById(id ?? this.id) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal()
    }
  }

  hide(id?: string) {
    const dialog = document.getElementById(id ?? this.id) as HTMLDialogElement;
    if (dialog) {
      dialog.close()
    }
    this.state.next({ model: undefined, mode: ModalMode.create })
  }

  get currentState() {
    return this.state as Observable<ModalState>
  }
}
