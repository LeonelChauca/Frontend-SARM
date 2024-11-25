import { useToast } from 'primevue/usetoast'
const toast = useToast()
export const showToast = ({
  title = '',
  description = '',
  status = 'info',
  duration = 3000,
}) => {
  toast({
    title,
    description,
    status,
    duration,
    isClosable: true,
  })
}
