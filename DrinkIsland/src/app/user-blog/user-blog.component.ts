import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-user-blog',
  templateUrl: './user-blog.component.html',
  styleUrls: ['./user-blog.component.css']
})
export class UserBlogComponent implements OnInit {
  posts: any[]=[];
  newPost: any = { title: '' , text: '' };

  constructor(private blogService: BlogService) { }
  
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.blogService.getPosts().subscribe(
      response => {
        this.posts = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  addPost(post:any){
    post.user_id=localStorage.getItem('user_id');
    this.blogService.addPost(post).subscribe(
      response => {
        console.log('Data added successfully:', response);
        this.loadPosts();
      },
      error => {
        console.error('Error added data:', error);
      }
    );
  }

  updatePost(post: any): void {
    post.user_id=localStorage.getItem('user_id');
    this.blogService.updatePost(post).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadPosts();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  deletePost(post: any): void {
    post.user_id=localStorage.getItem('user_id');
    this.blogService.deletePost(post).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        this.loadPosts();
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
