<?php

namespace App\Http\Requests\Game;

use Illuminate\Foundation\Http\FormRequest;

class Edit extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'requred|min:2,max:190',
            'description' => 'requred|min:8,max:500',
            'developer_id' => 'requred|exists:developers,id',
            'rating_id' => 'requred|exists:ratings,id',
            'trailer_link' => 'nullable|max:500',
            'release_date' => 'requred|date',
        ];
    }
}
