<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function addPost(Request $request){
        $request->validate([
            'user_id' => ['required'],
            'title' => ['required'],
            'text' => ['required']
        ]);
        $poszt=new Post;
        $poszt->title=$request->get('title');
        $poszt->user_id=$request->get('user_id');
        $poszt->text = $request->get('text');
        $poszt->save();
        return response()->json(['message'=>'Poszt sikeresen hozzáadva', 'data'=>$poszt], 201);
    }

    public function getPosts(){
        $posztok = DB::table('posts')->get();
        return response()->json($posztok);
    }

    public function getPostsByUserId(Request $userId){
        $id=$userId->user_id;
        $posztok=DB::table('posts')->where('posts.user_id', $id)->get();
        return response()->json($posztok);
    }

    public function modifyPost(Request $request){
        $request->validate([
            'user_id' => 'required',
            'title' => 'required',
            'text' => 'required'
        ]);
        $id = $request->id;
        $post=Post::find($id);
        if (is_null($post)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Poszt.', 'id'=>$id], 202);
        }
        $post->user_id=$request->get('user_id');
        $post->title=$request->get('title');
        $post->text=$request->get('text');
        $post->save();
        return response()->json(['message'=>'Poszt sikeresen módosítva', 'data'=>$post], 201);
    }

    public function deletePost(Request $request){
        $id = $request->id;
        $post=Post::find($id);
        if (is_null($post)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Poszt.', 'id'=>$id], 202);
        }
        Post::destroy($post->id);
        return response()->json(['message'=>'Poszt sikeresen törölve', 'data'=>$post], 201);
    }
}
