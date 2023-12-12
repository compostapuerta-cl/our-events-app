// A module that bring us the common used modules
// like material, forms, common modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ValidationMessagesModule, ValidationMessagesLoader } from 'ng2-custom-validation';
import { messageLoaderFactory } from './messages/loader';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import { MdRadioModule } from '@angular2-material/radio';

import { KeyValuePipe } from './components/shared/key-value.pipe';

@NgModule({
    imports: [
        MdMenuModule.forRoot(),
        ValidationMessagesModule.forRoot({
            provide: ValidationMessagesLoader,
            useFactory: messageLoaderFactory
        }),
        MdRadioModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdMenuModule,
        MdRadioModule,
        KeyValuePipe
    ],
    declarations: [
        KeyValuePipe
    ],
    providers: [],
})
export class SharedModule { }
