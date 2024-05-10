import React, { useContext, useState, createContext, useMemo, useCallback, useId } from 'react'


interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  },
  onChangeTheme: (color: 'light' | 'dark') => void
}
const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => { }
});

export default function Welcome() {


  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' });

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  const valueContext = useMemo(() => {
    return {
      theme,
      onChangeTheme
    }
  }, [theme, onChangeTheme])
  return (
    <div className='welcome'>
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <Form />
        <Lable />
      </ThemeContext.Provider>
    </div>
  )
}

const Lable = () => {

  const { theme, onChangeTheme } = useContext(ThemeContext)
  const id = useId();
  return (
    <>
      <label htmlFor={id}>User dark mode</label>
      <input
        id={id}
        type="checkbox"
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }} />
    </>
  )
}

const Form = () => {
  return (
    <Panel title='welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string, children: React.ReactNode }) => {

  const { theme } = useContext(ThemeContext)
  console.log(theme)
  const className = 'panel-' + theme?.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'button-' + theme?.color
  return <button className={className}>{children}</button>
}
