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
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:2,max:190',
            'description' => 'required|min:8,max:500',
            'developer_id' => 'required|exists:developers,id',
            'rating_id' => 'required|exists:ratings,id',
            'trailer_link' => 'nullable|max:500',
            'release_date' => 'required|date',
        ];
    }
}
