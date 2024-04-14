<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ital;
use Illuminate\Support\Facades\DB;

class ItalController extends Controller
{
    public function addItal(Request $request){
        $request->validate([
            'name' => 'required'
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

    /*public function modifyItal(Request $request){
        $id=0;
    }


    public function modifyType(Request $request){
        $id = $request->get("id");
        $type = Type::find($id);
        $type->type = $request->get("type");
        $type->save();
        if (is_null($type)) {
            return $this->sendError("hiba a bejövő paraméterekben","Nincs ilyen Type");
        }
        return $this->sendResponse($type, "Módosítva");
    }
    
    public function destroyType(Request $request){
        
        $type = Type::find($request->get("id"));
        if (is_null($type)) {
            return $this->sendError("hiba a bejövő paraméterekben","Nincs ilyen Type");
        }else {
            Type::destroy($type->id);
            return $this->sendResponse($type, "Törölve");
        }
    }*/
}
