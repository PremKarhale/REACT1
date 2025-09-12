//RTE (Real time editor )


import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'


export default function Rte({ name, control, label, defaultValue = "" }) {
return (
<div className='w-full '>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onchange } }) => {
            {
        <Editor
            initialValue='default value'
            init={{
                branding: false,
                height: 500,
                menubar:true,
                plugins: [
                    // Basic text formatting
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount',

                    // Advanced formatting
                    'paste', 'directionality', 'emoticons', 'template', 'codesample',
                    'hr', 'pagebreak', 'nonbreaking', 'toc', 'imagetools',

                    // Collaboration & workflow
                    'autosave', 'save', 'quickbars', 'accordion', 'autoresize'
                ],
                toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={onchange}
        />
    }
}
}
/>

        </div>


    )
}


