import { IconProps } from "../../component/type"

export const InventoryIcon: React.FC<IconProps> = ({ active }) => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10M3 10L4.58555 4.45056C4.83087 3.59196 5.61564 3 6.5086 3H12M3 10H12M21 10L19.4144 4.45056C19.1691 3.59195 18.3844 3 17.4914 3H12M21 10H12M12 3V10" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" />
          <path d="M5.5 17.5H12" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" stroke-linecap="round" />
      </svg>

  )
}
