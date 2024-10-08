import { IconProps } from "../../component/type"

export const ProductIcon: React.FC<IconProps> = ({ active }) => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" />
          <path d="M8 16V12" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" stroke-linecap="round" />
          <path d="M12 16V10" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" stroke-linecap="round" />
          <path d="M16 16V8" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" stroke-linecap="round" />
      </svg>

  )
}
