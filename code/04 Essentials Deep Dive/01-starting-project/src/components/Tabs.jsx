export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
    //const ButtonContainer = bottonsContainer;

    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>

            {children}
        </>
    );
}
