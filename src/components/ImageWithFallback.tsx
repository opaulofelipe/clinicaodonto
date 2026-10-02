import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle = 'Clínica Dr. Rafael Mendes',
  fallbackSubtitle = 'Odontologia de Alta Precisão · Rio de Janeiro',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${containerClassName}`}>
      {!hasError && src ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-teal-600 border-t-transparent animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt || 'Dr. Rafael Mendes - Odontologia Especializada'}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            {...props}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mb-4">
            <svg
              className="w-7 h-7 text-teal-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <p className="font-display font-medium text-lg text-slate-100 mb-1">{fallbackTitle}</p>
          <p className="text-xs text-slate-400 max-w-xs">{fallbackSubtitle}</p>
        </div>
      )}
    </div>
  );
};
