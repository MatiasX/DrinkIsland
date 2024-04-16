<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Alapanyag;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ReceptController;

class AlapanyagController extends Controller
{
    public function addAlapanyag(Request $request){
        $request->validate([
            'name' => ['required', 'unique:alapanyagok']
        ]);
        $alapanyag=new Alapanyag;
        $alapanyag->name=$request->get('name');
        $alapanyag->save();
        return response()->json(['message'=>'Alapanyag sikeresen hozzáadva', 'data'=>$alapanyag], 201);
    }
    
    public function getAlapanyagByName(Request $alapanyagName){
        $current=Alapanyag::where("name",$alapanyagName->input('name'))->first();
        return $current;
    }

    public function getAlapanyagById(Request $alapanyagId){
        $current=Alapanyag::where("id",$alapanyagId->input('id'))->first();
        return $current;
    }

    public function getAlapanyagok(){
        $alapanyagok = DB::table('alapanyagok')->get();
        return response()->json($alapanyagok);
    }

    public function modifyAlapanyag(Request $request){
        $request->validate([
            'name' => ['required', 'unique:alapanyagok']
        ]);
        $id = $request->id;
        $alapanyag = Alapanyag::find($id);
        if (is_null($alapanyag)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Alapanyag.', 'id'=>$id], 202);
        }
        $alapanyag->name=$request->get('name');
        $alapanyag->save();
        return response()->json(['message'=>'Alapanyag sikeresen módosítva', 'data'=>$alapanyag], 201);
    }

    public function deleteAlapanyag(Request $request){
        $id = $request->id;
        $alapanyag = Alapanyag::find($id);
        if (is_null($alapanyag)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű alapanyag.', 'id'=>$request], 202);
        }
        $hasznalatban=(new ReceptController)->getReceptByAlapanyagId($request);
        if (is_null($hasznalatban)){
            Alapanyag::destroy($alapanyag->id);
            return response()->json(['message'=>'Alapanyag sikeresen törölve', 'data'=>$alapanyag], 201);
        }
        else{
            return response()->json(['message'=>'Alapanyag nem törölhető, mert egy recept része.', 'recept'=>$hasznalatban], 202);
        }
    }

}
