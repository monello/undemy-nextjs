'use client';

import { ChangeEvent, useRef, useState } from 'react';
import styles from './imagePicker.module.css';
import Image from 'next/image';

interface ImagePickerProps {
    label: string;
    name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
        null
    );
    const imageInputRef = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInputRef.current?.click();
    }

    function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
        const file: File | null = event.target.files
            ? event.target.files[0]
            : null;

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && typeof pickedImage === 'string' && (
                        <Image src={pickedImage} alt="Picked Image" fill />
                    )}
                </div>
                <input
                    type="file"
                    name={name}
                    id={name}
                    accept="image/png, image/jpeg"
                    className={styles.input}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
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
