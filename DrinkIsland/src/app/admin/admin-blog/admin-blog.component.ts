import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  posts: any;

  constructor(private blogService: BlogService) { }
  
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.blogService.getAllPosts().subscribe(
      response => {
        this.posts = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  updatePost(post: any): void {
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
    this.blogService.deletePost(post).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        this.loadPosts();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }
}
