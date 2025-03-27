
import { supabase } from "../supabase/supabase";
import ClientHome from "./ClientHome";
import AdminButton from "../components/adminButton"
export default async function Home() {
  const { data } = await supabase
    .from('show')
    .select('value')
    .eq('id', 'choose')
    .single();

  const i = data?.value ?? 0;

  return (
    <div>
    <AdminButton />
    <ClientHome i={i} />


    </div>);
}
