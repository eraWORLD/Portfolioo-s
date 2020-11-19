import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "./components/works/works.component";

@Pipe({
    name: 'SearchPosts'
})
export  class SearchPipe implements PipeTransform {
    transform(posts: Post[], search = ''): Post[] {
        if (!search.trim()) {
            return posts;
        }
        return posts.filter( post => {
            return post.cat.toLowerCase().includes(search.toLowerCase());
        });
    }

}

