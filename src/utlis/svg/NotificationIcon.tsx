import { IconProps } from "../../component/type"

export const NotificationIcon: React.FC<IconProps> = ({ active }) => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.2798 10.0666C7.48379 7.58096 9.58399 5.60566 12.0779 5.59039C14.5491 5.57525 16.5667 7.53272 16.8167 9.99129C16.9708 11.5062 17.3972 12.9015 18.2536 14.387C19.1227 15.8946 18.1938 18 16.4536 18H7.70451C5.95987 18 5.05178 15.842 5.93027 14.3346C6.77156 12.8912 7.15964 11.5308 7.2798 10.0666Z" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" />
          <path d="M12 3V5" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" stroke-linecap="round" />
          <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18" stroke={active ? "#FDFDFF" :'#1F1F22'} stroke-width="1.5" />
      </svg>

  )
}
