<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;

class ProfileController extends Controller
{
    public function getUserProfileData() {
        $user = Auth::user();
        return response()->json(['username' => $user]);
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
            $user->is_admin = true;
            $user->save();
            return response()->json(['message' => 'Admin jog hozzáadva.']);
        }
                
    }

    public function deleteAccount() {
        $user = Auth::user();
        $user ->delete();
        return response()->json(['message' => 'Sikeres törlés']);
    }
}
