import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any;

  constructor(private blogService: BlogService) { }
  
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getAllPosts().subscribe(res => {
      this.posts = res;
    })
  }
}
