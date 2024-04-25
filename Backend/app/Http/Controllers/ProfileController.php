<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function getUserProfileData() {
        $user = Auth::user();
        return response()->json(['username' => $user]);
    }

    public function getUsers() {
        $users = DB::table('users')->get();
        return response()->json($users);
    }

    public function setNewPassword(Request $request) {
        $user = Auth::user();
        $request -> validate([
            'password' => 'required',
            'password_confirmation' => ['required','same:password']
        ],[
            'password.required'=>"A jelszó megadása kötelező!",
            'password_confirmation.required'=>"A jelszó megerősítése kötelező!",
            'password_confirmation.same'=>"A két jelszó nem egyezik!",
        ]);
        $user->password = bcrypt($request->password);
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['message' => 'Jelszó megváltoztatva']);
    }

    public function setAdmin(Request $request) {
        $request -> validate([
            'username' => 'required'
        ],[
            'username.required'=>"A felhasználónév megadása kötelező!"
        ]);
        $user = User::where('username', $request->username)->first();
        if (is_null($user)) {
            return response()->json(['message' => 'Nincs ilyen felhasználónevű user.', 'username' => $request->username]);
        }else{
            if ($user->is_admin==false){
                $user->is_admin = true;
                $user->save();
                return response()->json(['message' => 'Admin jog hozzáadva.']);
            }else{
                $user->is_admin = false;
                $user->save();
                return response()->json(['message' => 'Admin jog elvéve.']);
            }
            
        }
                
    }

    public function deleteAccount() {
        $user = Auth::user();
        DB::table('posts')->where('user_id', $user->id)->delete();
        $user ->delete();
        return response()->json(['message' => 'Sikeres törlés']);
    }
}
