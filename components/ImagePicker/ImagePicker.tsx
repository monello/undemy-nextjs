'use client';

import { useRef } from 'react';
import styles from './imagePicker.module.css';

interface ImagePickerProps {
    label: string;
    name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
    const imageInputRef = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInputRef.current?.click();
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <input
                    type="file"
                    name={name}
                    id={name}
                    accept="image/png, image/jpeg"
                    className={styles.input}
                    ref={imageInputRef}
                />
                <button
                    className={styles.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
