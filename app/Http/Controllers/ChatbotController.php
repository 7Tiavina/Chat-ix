<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    public function sendMessage(Request $request)
    {
        // Simulez une réponse comme si elle venait de l'API LM Studio
        $response = [
            'message' => $request->input('message'),
            'reply' => 'Ceci est une réponse simulée depuis Laravel'
        ];

        return response()->json($response);
    }
}