import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: #000;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

export const Avatar = styled.Image`
  width: 90%;
  height: 240px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Icon = styled.Image`
  width: 48;
  height: 48px;
`;

export const ImageTitle = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #ddd;
  margin-left: 10px;
  margin-top: 5px;
`;

export const StatsContainer = styled.View`
  width: 90%;
  align-items: flex-start;
  margin-top: 5px;
`;

export const StatsText = styled.Text`
  font-size: 15;
  color: #ddd;
`;
