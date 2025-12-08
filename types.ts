export interface SlideProps {
  isActive: boolean;
  direction: number;
}

export interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}
