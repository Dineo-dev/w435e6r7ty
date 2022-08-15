import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor(private BookService: BooksService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description
    };

    this.BookService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
   
  }

  newBook(): void {
    this.submitted = false,
    this.book = {
      title: '',
      description: '',
      published: false
    }
  }
  
  }



