"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { CirclesWithBar } from "react-loader-spinner";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearchParams = useCallback((debouncedValue:string) => {
    let params = new URLSearchParams(window.location.search);
    if(debouncedValue.length > 0){
      params.set('search', debouncedValue);
    }else {
      params.delete('search');
    }
    startTransition(()=>{
      router.replace(`${pathname}?${params.toString()}`);
    })
  }, [pathname, router]);

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search") ?? ""
    setInputValue(searchQuery)
  },[])//plays a major role when link is shared

  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true)
    }
  }, [debouncedValue, mounted])

  useEffect(()=>{
     const timer = setTimeout(()=>{
        setDebouncedValue(inputValue)
     },500)
     return ()=>{
      clearTimeout(timer);
     }
  },[inputValue])

  useEffect(()=>{
    if(mounted) handleSearchParams(debouncedValue)
  },[debouncedValue, handleSearchParams, mounted]);

  return (
    <div className="relative mt-8 mb-5 flex">
      <Input value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} placeholder="Search User"  />
      {isPending && (
        <div className="absolute ml-[90%] mt-1">
          <CirclesWithBar
            height="30"
            width="30"
            color="#a6a6a6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
