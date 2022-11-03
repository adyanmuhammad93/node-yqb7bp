import { Navbar, Dropdown, Avatar, Sidebar, Footer } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainLayout({ children }) {
  const router = useRouter();
  const menu = [
    {
      title: 'Login',
      url: '/',
    },
    {
      title: 'Cash Basis',
      url: '/cash-basis',
    },
    {
      title: 'Amortize',
      url: '/amortize',
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <div className="border-b bg-white">
          <div className="mx-auto w-full max-w-[1370px]">
            <Navbar fluid={true} rounded={true}>
              <Navbar.Brand>
                <div className="w-[32px] h-[32px] bg-blue-500 rounded-full mr-4"></div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  BAF Budgeting System
                </span>
              </Navbar.Brand>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <div className="w-[32px] h-[32px] bg-red-500 rounded-full"></div>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">John Doe</span>
                    <span className="block truncate text-sm font-medium">
                      john.doe@example.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            </Navbar>
          </div>
        </div>

        <div className="grow flex mx-auto w-full max-w-[1370px]">
          <div className="flex-initial p-4 border-r">
            <div className="w-fit">
              <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {menu.map((data, index) => {
                      return (
                        <>
                          <Sidebar.Item key={index}>
                            <Link href={data.url}>
                              <span
                                className={
                                  router.pathname === data.url
                                    ? 'font-bold'
                                    : ''
                                }
                              >
                                {data.title}
                              </span>
                            </Link>
                          </Sidebar.Item>
                        </>
                      );
                    })}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
            </div>
          </div>
          {/* important */}
          <div className="flex-1 p-4">{children}</div>
        </div>

        <div className="border-t bg-white">
          <div className="mx-auto w-full max-w-[1370px]">
            <Footer container={true} className="shadow-none">
              <Footer.Copyright href="#" by="Bussan Auto Finance" year={2022} />
            </Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
