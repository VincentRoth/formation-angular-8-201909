import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/shared/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authorForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get name() {
    return this.authorForm.get('name');
  }

  onSubmit() {
    const formValue = this.authorForm.value;
    const author = {
      name: formValue.name
    };
    this.authorService.create(author).subscribe({
      complete: () => this.authorForm.reset()
    });
  }
}
