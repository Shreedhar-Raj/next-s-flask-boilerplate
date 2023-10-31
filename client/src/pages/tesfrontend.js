import AuthCheck from "@/components/AuthCheck";
import { supabase } from "@/utils/supabaseClient";
export default  function TestFrontEnd() {

return(
    <AuthCheck>Home</AuthCheck>
)
}