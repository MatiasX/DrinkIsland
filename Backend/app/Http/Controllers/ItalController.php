<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ital;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\TipusController;
use App\Http\Controllers\ReceptController;

class ItalController extends Controller
{
    public function addItal(Request $request){
        $request->validate([
            'name' => ['required', 'unique:italok']
        ]);
        $ital=new Ital;
        $ital->name=$request->get('name');
        $ital->save();
        return response()->json(['message'=>'Ital sikeresen hozzáadva', 'data'=>$ital], 201);
    }
    public function getItalByName(Request $italNeve){
        $name=$italNeve->name;
        $ital = DB::table('italok')->where("name",$name)->get();
        return $ital;
    }

    public function getItalById(Request $italId){
        $id=$italId->id;
        $ital = DB::table('italok')->where('id',$id)->get();
        return $ital;
    }
    public function getItalok(){
        $italok = DB::table('italok')->get();
        return response()->json($italok);
    }

    public function modifyItal(Request $request){
        $request->validate([
            'name' => ['required', 'unique:italok']
        ]);
        $id = $request->id;
        $ital = Ital::find($id);
        if (is_null($ital)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Ital.', 'id'=>$id], 202);
        }
        $ital->name=$request->get('name');
        $ital->save();
        return response()->json(['message'=>'Ital sikeresen módosítva', 'data'=>$ital], 201);
    }


    public function deleteItal(Request $request){
        $id = $request->id;
        $ital = Ital::find($id);
        if (is_null($ital)) {
            return response()->json(['message'=>'Hiba a bejövő paraméterekben. Nincs ilyen id-jű Ital.', 'id'=>$id], 202);
        }else {
            (new TipusController)->deleteTipusByItalId($ital);
            DB::table('receptek')->where('ital_id', $ital->id)->delete();
            Ital::destroy($ital->id);
            //(new ReceptController)->deleteAllRecept($ital);
            return response()->json(['message'=>'Ital sikeresen törölve', 'data'=>$ital], 201);
        }
    }
}
