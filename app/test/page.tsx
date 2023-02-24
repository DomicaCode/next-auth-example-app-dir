import { getCurrentUser } from "../../utils/session"

export default async function Test() {
  const user = await getCurrentUser();
  
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}