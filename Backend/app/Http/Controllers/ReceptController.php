<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recept;
use Illuminate\Support\Facades\DB;

class ReceptController extends Controller
{
    public function addRecept(Request $request){
        $request->validate([
            'ital_id' => 'required',
            'alapanyag_id' => 'required',
            'amount' => 'required'
        ]);
        $recept=new Recept;
        $recept->ital_id=$request->get('ital_id');
        $recept->alapanyag_id=$request->get('alapanyag_id');
        $recept->amount=$request->get('amount');
        $recept->save();
        return response()->json(['message'=>'Recept sikeresen hozzáadva', 'data'=>$recept], 201);
    }

    public function getReceptek(){
        $receptek = DB::table('receptek')->get();
        return response()->json($receptek);
    }

    public function getReceptByAlapanyagId(Request $request){
        $current=Recept::where("alapanyag_id",$request->get('id'))->first();
        return $current;
    }

    public function modifyRecept(Request $request){
        $request->validate([
            'ital_id' => 'required',
            'alapanyag_id' => 'required',
            'amount' => 'required'
        ]);
        $id = $request->id;
        $recept=Recept::find($id);
        if (is_null($recept)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Recept.', 'id'=>$id], 202);
        }
        $recept->ital_id=$request->get('ital_id');
        $recept->alapanyag_id=$request->get('alapanyag_id');
        $recept->amount=$request->get('amount');
        $recept->save();
        return response()->json(['message'=>'Recept sikeresen módosítva', 'data'=>$recept], 201);
    }

    public function deleteRecept(Request $request){
        $id = $request->id;
        $recept=Recept::find($id);
        if (is_null($recept)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Recept.', 'id'=>$id], 202);
        }
        Recept::destroy($recept->id);
        return response()->json(['message'=>'Recept sikeresen törölve', 'data'=>$recept], 201);
    }


}
