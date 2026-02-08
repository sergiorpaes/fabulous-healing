import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                <div className="flex items-center justify-between p-6 border-b border-purple-50 bg-purple-50/30">
                    <h3 className="text-2xl font-serif font-bold text-deep-violet">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-purple-100/50 text-purple-400 hover:text-deep-violet transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-8 overflow-y-auto max-h-[70vh] text-purple-800/80 leading-relaxed whitespace-pre-line">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
